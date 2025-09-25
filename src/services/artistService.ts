import { Op } from "sequelize";
import Artist from "../models/artistsModel";

class ArtistService {
  async getAllArtists(name?: string) {
    let where = {};    
      if (name) {
        where = { name: { [Op.iLike]: `%${name}%` } };
      }
    return await Artist.findAll({ where });

}

  async createArtist(data: {name: string, description: string}) {
    const minName =  data.name.toLowerCase() 

    const existing = await Artist.findOne({ where: { name: minName } });
    
    if (existing) {
      throw new Error("Já existe um artista com esse nome!");
    }

    const newArtist = await Artist.create({ ...data, name: minName });
    return newArtist;
  }

  async deleteArtist(id: string){
    return await Artist.destroy({ where: { id }
    });
  }

  async updateArtist(id: string, data: {name?: string, description?: string}){
    const [update] = await Artist.update(data, { where: { id }});
    return update;
  }
}

export default new ArtistService();