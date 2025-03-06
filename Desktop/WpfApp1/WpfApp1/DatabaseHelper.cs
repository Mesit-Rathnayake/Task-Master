using SQLite;
using System.Collections.ObjectModel;
using System.IO;
using System.Linq;

namespace WpfApp1
{
    public static class DatabaseHelper
    {
        private static readonly string dbPath = Path.Combine(System.AppDomain.CurrentDomain.BaseDirectory, "tasks.db");
        private static SQLiteConnection db;

        static DatabaseHelper()
        {
            db = new SQLiteConnection(dbPath);
            db.CreateTable<Task>(); // Creates table if it doesn’t exist
        }

        public static void AddTask(Task task)
        {
            if (task.Id == null)
            {
                db.Insert(task); // Insert new task
            }
            else
            {
                db.Update(task); // Update existing task
            }
        }

        public static void DeleteTask(Task task)
        {
            db.Delete(task); // Delete task from database
        }

        public static ObservableCollection<Task> GetTasks(string status)
        {
            return new ObservableCollection<Task>(db.Table<Task>().Where(t => t.Status == status).ToList());
        }
    }
}
