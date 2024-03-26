package auction.auction;

import jakarta.persistence.*;

@Entity
@Table(name = "recipes")
public class recipe {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id; 

    @Column(name = "title")
    private String title;
    @Column(name = "ingredients")
    private String ingredients;
    
    @Column(name = "instructions") 
    private String instructions;
    @Column(name = "cooking_time")
    private int cookingTime;
    @Column(name = "difficulty_level")

    private String difficultyLevel; 
    @Column(name = "average_rating")
    private double averageRating;

    // Constructors, getters, and setters
    public recipe() {
    }

    public recipe(Long id, String title, String ingredients, String instructions, int cookingTime, String difficultyLevel, double averageRating) {
        this.id = id;
        this.title = title;
        this.ingredients = ingredients;
        this.instructions = instructions;
        this.cookingTime = cookingTime;
        this.difficultyLevel = difficultyLevel;
        this.averageRating = averageRating;
    }

    public Long getId() {
        return id;
    }

    public String getTitle() {
        return title;
    }

    public String getIngredients() {
        return ingredients;
    }

    public String getInstructions() {
        return instructions;
    }

    public int getCookingTime() {
        return cookingTime;
    }

    public String getDifficultyLevel() {
        return difficultyLevel;
    }

    public double getAverageRating() {
        return averageRating;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public void setIngredients(String ingredients) {
        this.ingredients = ingredients;
    }

    public void setInstructions(String instructions) {
        this.instructions = instructions;
    }

    public void setCookingTime(int cookingTime) {
        this.cookingTime = cookingTime;
    }

    public void setDifficultyLevel(String difficultyLevel) {
        this.difficultyLevel = difficultyLevel;
    }

    public void setAverageRating(double averageRating) {
        this.averageRating = averageRating;
    }


    
}
