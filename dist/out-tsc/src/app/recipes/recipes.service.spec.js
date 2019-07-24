import { TestBed } from '@angular/core/testing';
import { RecipesService } from './recipes.service';
describe('RecipesService', function () {
    beforeEach(function () { return TestBed.configureTestingModule({}); });
    it('should be created', function () {
        var service = TestBed.get(RecipesService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=recipes.service.spec.js.map