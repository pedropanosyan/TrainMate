import org.lab1.User;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.EntityTransaction;
import javax.persistence.Persistence;

public class Main {
    private String firstName;
    private String lastName;
    private String email;


    public static void main(String[] args) {
        final EntityManagerFactory factory = Persistence.createEntityManagerFactory("lab1");

        final EntityManager entityManager = factory.createEntityManager();

        task1(entityManager);

        entityManager.close();

    }

    private static void task1(EntityManager entityManager){
        // Sample: add a user
        final EntityTransaction transaction = entityManager.getTransaction();
        transaction.begin();
        final User pepe = new User("Pepe", "Martinez", "pepe.martinez@gmail.com");
        entityManager.persist(pepe);
        transaction.commit();
    }
}