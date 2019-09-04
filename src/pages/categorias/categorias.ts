import { API_CONFIG } from "./../../config/api.config";
import { CategoriaDTO } from "./../../models/categoria.dto";
import { CategoriaService } from "./../../services/domain/categoria.service";
import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";

@IonicPage()
@Component({
  selector: "page-categorias",
  templateUrl: "categorias.html"
})
export class CategoriasPage {
  categorias: CategoriaDTO[];

  srcImgFolder: string = API_CONFIG.srcImgFolder;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public categoriaService: CategoriaService
  ) {}

  ionViewDidLoad() {
    this.categoriaService.findAll().subscribe(
      response => {
        this.categorias = response;
      },
      error => {
        console.log(error);
      }
    );
  }
}
