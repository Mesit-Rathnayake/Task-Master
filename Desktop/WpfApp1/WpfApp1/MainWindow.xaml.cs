using System.Windows;

namespace WpfApp1
{
    public partial class MainWindow : Window
    {
        public MainWindow()
        {
            InitializeComponent();
        }

        private void LoginButton_Click(object sender, RoutedEventArgs e)
        {
            // Create an instance of MainPage
            MainPage mainPage = new MainPage();

            // Show the MainPage and close the current Login Window
            mainPage.Show();
            this.Close();
        }
    }
}
