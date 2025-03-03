using System.Collections.ObjectModel;
using System.Windows;
using System.Windows.Controls;

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

    }

    public class Task
    {
        public string? TaskName { get; set; }
        public string? Deadline { get; set; }
        public string? Status { get; set; }
        public string? Priority { get; set; } // Add this property for the task's priority
    }
}
