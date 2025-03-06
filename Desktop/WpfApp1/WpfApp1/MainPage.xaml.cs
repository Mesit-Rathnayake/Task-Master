using SQLite;
using System.Collections.ObjectModel;
using System.Windows;
using System.Windows.Controls;
using SQLite;

namespace WpfApp1
{
    public partial class MainPage : Window
    {
        public ObservableCollection<Task> ToDoTasks { get; set; }
        public ObservableCollection<Task> DoingTasks { get; set; }
        public ObservableCollection<Task> DoneTasks { get; set; }

        public MainPage()
        {
            InitializeComponent();
            ToDoTasks = new ObservableCollection<Task>();
            DoingTasks = new ObservableCollection<Task>();
            DoneTasks = new ObservableCollection<Task>();

            // Bind the ListBoxes to the ObservableCollections
            ToDoListBox.ItemsSource = ToDoTasks;
            DoingListBox.ItemsSource = DoingTasks;
            DoneListBox.ItemsSource = DoneTasks;
        }

        private void AddTaskButton_Click(object sender, RoutedEventArgs e)
        {
            string taskName = TaskNameInput.Text;
            string deadline = DeadlinePicker.SelectedDate?.ToString("MM/dd/yyyy") ?? "N/A"; // Check if date is selected
            string priority = (PrioritySelector.SelectedItem as ComboBoxItem)?.Content.ToString() ?? "N/A"; // Get the selected priority

            // Add the new task to the To-Do list with the priority
            ToDoTasks.Add(new Task { TaskName = taskName, Deadline = deadline, Status = "To-Do", Priority = priority });

            // Clear the input fields
            TaskNameInput.Clear();
            DeadlinePicker.SelectedDate = null;
            PrioritySelector.SelectedIndex = -1;
        }

        private void StartTaskButton_Click(object sender, RoutedEventArgs e)
        {
            var task = (sender as Button)?.DataContext as Task;
            if (task != null)
            {
                ToDoTasks.Remove(task);
                task.Status = "Doing";
                DoingTasks.Add(task);
            }
        }

        private void CompleteTaskButton_Click(object sender, RoutedEventArgs e)
        {
            var task = (sender as Button)?.DataContext as Task;
            if (task != null)
            {
                DoingTasks.Remove(task);
                task.Status = "Done";
                DoneTasks.Add(task);
            }
        }
        private void DeleteTaskButton_Click(object sender, RoutedEventArgs e)
        {
            // Get the task from the button's DataContext
            var task = (sender as Button)?.DataContext as Task;
            if (task != null)
            {
                // Remove the task from the appropriate ObservableCollection based on its status
                if (task.Status == "To-Do")
                {
                    ToDoTasks.Remove(task);
                }
                else if (task.Status == "Doing")
                {
                    DoingTasks.Remove(task);
                }
                else if (task.Status == "Done")
                {
                    DoneTasks.Remove(task);
                }
            }
        }
        private void EditTaskButton_Click(object sender, RoutedEventArgs e)
        {
            var task = (sender as Button)?.DataContext as Task;
            if (task == null) return;

            // Create input dialog window
            Window editWindow = new Window
            {
                Title = "Edit Task",
                Height = 250,
                Width = 400,
                WindowStartupLocation = WindowStartupLocation.CenterOwner,
                Owner = this
            };

            Grid grid = new Grid();
            grid.RowDefinitions.Add(new RowDefinition());
            grid.RowDefinitions.Add(new RowDefinition());
            grid.RowDefinitions.Add(new RowDefinition());
            grid.RowDefinitions.Add(new RowDefinition());
            grid.RowDefinitions.Add(new RowDefinition());

            TextBox taskNameInput = new TextBox { Text = task.TaskName, Margin = new Thickness(10) };
            DatePicker deadlinePicker = new DatePicker { SelectedDate = string.IsNullOrEmpty(task.Deadline) ? null : (DateTime?)DateTime.Parse(task.Deadline), Margin = new Thickness(10) };
            ComboBox prioritySelector = new ComboBox { Margin = new Thickness(10) };
            prioritySelector.Items.Add(new ComboBoxItem { Content = "High" });
            prioritySelector.Items.Add(new ComboBoxItem { Content = "Medium" });
            prioritySelector.Items.Add(new ComboBoxItem { Content = "Low" });
            prioritySelector.SelectedIndex = (task.Priority == "High") ? 0 : (task.Priority == "Medium") ? 1 : 2;

            Button saveButton = new Button { Content = "Save", Margin = new Thickness(10) };
            saveButton.Click += (s, ev) =>
            {
                task.TaskName = taskNameInput.Text;
                task.Deadline = deadlinePicker.SelectedDate?.ToString("MM/dd/yyyy") ?? "N/A";
                task.Priority = (prioritySelector.SelectedItem as ComboBoxItem)?.Content.ToString() ?? "N/A";

                // Refresh UI by resetting data binding
                ToDoListBox.Items.Refresh();
                DoingListBox.Items.Refresh();
                DoneListBox.Items.Refresh();

                editWindow.Close();
            };

            grid.Children.Add(taskNameInput);
            grid.Children.Add(deadlinePicker);
            grid.Children.Add(prioritySelector);
            grid.Children.Add(saveButton);

            Grid.SetRow(taskNameInput, 0);
            Grid.SetRow(deadlinePicker, 1);
            Grid.SetRow(prioritySelector, 2);
            Grid.SetRow(saveButton, 3);

            editWindow.Content = grid;
            editWindow.ShowDialog();
        }


    }

    public class Task
    {
        [PrimaryKey, AutoIncrement]
        public int? Id { get; set; }
        public string? TaskName { get; set; }
        public string? Deadline { get; set; }
        public string? Priority { get; set; }
        public string? Status { get; set; }
    }
}
