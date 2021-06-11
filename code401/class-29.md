# What I Learnt Today

## Room

- data can be persisted using Room
- cache relavent pieces of data

Three major components of Room:

- Database class - holds the database and serves as the main access point
- Data entities - represents tables in the database
- Data acceses objects - provide methods to query, update, insert, and delete data in the database

Objects stored in the database are represented by entities. Room entities are used to define the database schema.

Since this is a relational database, you can define relationships between entities (one-to-many, many-to-one, many-to-many)

The advantages of room:
- Compile-time verification of SQL queries.
- Convenience annotations that minimize repetitive and error-prone boilerplate code.
- Streamlined database migration paths.

Primary components
- "database class" - holds the database and serves as the main access point for the underlying connection to your app's persisted data.
- "Data entities"  - represent tables in your app's database.
- "Data access objects (DAOs)" - provide methods that your app can use to query, update, insert, and delete data in the database.

Steps to setup room:
1. Include "dependencies" in "build.gradle"

    dependencies {
        def room_version = "2.3.0"

        implementation "androidx.room:room-runtime:$room_version"
        annotationProcessor "androidx.room:room-compiler:$room_version"

        // optional - RxJava2 support for Room
        implementation "androidx.room:room-rxjava2:$room_version"

        // optional - RxJava3 support for Room
        implementation "androidx.room:room-rxjava3:$room_version"

        // optional - Guava support for Room, including Optional and ListenableFuture
        implementation "androidx.room:room-guava:$room_version"

        // optional - Test helpers
        testImplementation "androidx.room:room-testing:$room_version"
    }

2. Implement a Room "database" 

   - Define Data entity : Each instance of class represents a row in the creatted table in the app's database.
        @Entity
        public class User {
            @PrimaryKey
            public int uid;

            @ColumnInfo(name = "first_name")
            public String firstName;

            @ColumnInfo(name = "last_name")
            public String lastName;
        }

   - Define Data access object (DAO) : which provides the methods that the rest of the app uses to interact with data in the creatted table.

        @Dao
        public interface UserDao {
            @Query("SELECT * FROM user")
            List<User> getAll();

            @Query("SELECT * FROM user WHERE uid IN (:userIds)")
            List<User> loadAllByIds(int[] userIds);

            @Query("SELECT * FROM user WHERE first_name LIKE :first AND " +
                "last_name LIKE :last LIMIT 1")
            User findByName(String first, String last);

            @Insert
            void insertAll(User... users);

            @Delete
            void delete(User user);
            }

   - Define Database : defines an AppDatabase class to hold the database.

        @Database(entities = {User.class}, version = 1)
        public abstract class AppDatabase extends RoomDatabase {
            public abstract UserDao userDao();
        }

   - Usage : write a code to create an instance of the database.

            AppDatabase db = Room.databaseBuilder(getApplicationContext(),
                    AppDatabase.class, "database-name").build();
                    
            UserDao userDao = db.userDao();
            List<User> users = userDao.getAll();