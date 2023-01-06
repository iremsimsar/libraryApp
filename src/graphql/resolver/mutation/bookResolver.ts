import { Book } from "../../../dto/bookDto"
import BookService from "../../../service/bookService"

export default class BuildingResolvers {

  public static getBookById(_parent: {}, args: { id: number })
    : Promise<Book> {

    return BuildingService.getBuildingById(args.id);
  }

  public static getIndependentZonesByBuildingId(_parent: {}, args: { buildingId: number })
    : Promise<IndependentZone[]> {

    return IndependentZoneService.getIndependentZonesByBuildingId(args.buildingId)
  }
}
