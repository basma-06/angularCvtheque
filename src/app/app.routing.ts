import { Router, RouterModule, Routes } from "@angular/router";
import { AddCvComponent } from "./cvTheque/add-cv/add-cv.component";
import { CvContainerComponent } from "./cvTheque/cv-container/cv-container.component";
import { EmbaucheComponent } from "./cvTheque/embauche/embauche.component";
import { UpdateComponent } from "./cvTheque/update/update.component";
import { ErrorComponent } from "./error/error.component";
import { LoginComponent } from "./login/login.component";

//objet de type Routes
const APP_ROUTING: Routes = [
    {path : 'cv', redirectTo: '/', pathMatch: 'full' }, 
    //{path : 'cv:default', redirectTo: '/', pathMatch: 'full' }, //route avec un parametre
    {path : 'cv/updateCv/:id', component: UpdateComponent},
    {path : '', component: CvContainerComponent }, //par defaut
    {path : 'login2', component: LoginComponent },
    {path : 'embauche', component: EmbaucheComponent },
    {path : 'cv/add', component: AddCvComponent },
    {path : '**', component: ErrorComponent } //cas de route non trouvée
];

//on genere une constante ROUTING qui va etre utilisé au niveau du app.module.ts
export const ROUTING = RouterModule.forRoot(APP_ROUTING);