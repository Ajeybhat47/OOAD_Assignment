package auction.auction;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class recipeService {

    @Autowired
    private recipeRepository recipeRepository;

    public List<recipe> getAllRecipes() {
        return recipeRepository.findAll();
    }

    public recipe getRecipeById(Long id) {
        return recipeRepository.findById(id).orElse(null);
    }

    public recipe createRecipe(recipe recipe) {
        // convert ingredients to text
        return recipeRepository.save(recipe);
    }

    public recipe updateRecipe(Long id, recipe recipe) {
        recipe.setId(id);
        return recipeRepository.save(recipe);
    }
    

    public void deleteRecipe(Long id) {
        recipeRepository.deleteById(id);
    }
}
