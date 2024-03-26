package auction.auction;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;


@RestController
@RequestMapping("/api/recipes")
public class recipeController {

    @Autowired
    private recipeService recipeService;

    @GetMapping("/getAllRecipes")
    public ResponseEntity<List<recipe>> getAllRecipes() {
        return ResponseEntity.ok(recipeService.getAllRecipes());
    }

    @GetMapping("/getRecipeByid/{id}")
    public ResponseEntity<recipe> getRecipeById(@PathVariable Long id) {
        return ResponseEntity.ok(recipeService.getRecipeById(id));
    }

    @PostMapping("/createRecipe")
    public ResponseEntity<recipe> createRecipe(@RequestBody recipe recipe) {
        return ResponseEntity.status(HttpStatus.CREATED).body(recipeService.createRecipe(recipe));
    }

    @PutMapping("/updateRecipe/{id}")
    public ResponseEntity<recipe> updateRecipe(@PathVariable Long id, @RequestBody recipe recipe) {
        return ResponseEntity.ok(recipeService.updateRecipe(id, recipe));
    }


    @DeleteMapping("/deleteRecipe/{id}")
    public ResponseEntity<Void> deleteRecipe(@PathVariable Long id) {
        recipeService.deleteRecipe(id);
        return ResponseEntity.noContent().build();
    }
}
