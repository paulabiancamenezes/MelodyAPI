import ArtistService from "../services/artistService";

const getArtist = async (req, res) => {
    try{
        const { name } = req.query;
        const artist = await ArtistService.getAllArtists(name);
        return res.json(artist);
      }catch (error){
        res.status(500).send(`Ocorreu um erro: ${error}`);
    }
}

const postArtist = async (req, res) => {
    try {
    const { name, description } = req.body;

    if (!name || !description) {
      return res.status(400).json({ error: "Preencha todos os campos" });
    }

    const newArtist  = await ArtistService.createArtist({name, description});

    res.status(201).json(newArtist);

  } catch (err) {
    console.log(err);
    res.status(400).json({ mensagem: `${err}` });
  }

}

const deleteArtist = async (req, res) => {
  try{

  const { id } = req.params;

  if (!id){
    return res.status(400).json({ error: "Necessário informar o ID do artista" });

  }
    const artistiDeleted = await ArtistService.deleteArtist(id);

  if (artistiDeleted === 0){
    return res.status(404).json({ error: "Artista não encontrado" });
  }

  return res.json({msg: `Artista de ID ${id} excluído com sucesso!`})

  }catch(err){
    console.log(`Ocorreu um erro ao deletar artista: ${err}`)
    res.status(500).json({ error: "Erro ao deletar artista" });
  }
}

const updateArtist = async (req, res) =>{
  try{
  const { id } = req.params;
  const { name, description } = req.body;

  if (!name || !description){
    return res.status(400).json({error: "Preencha todos os campos"});
  }

  const update = await ArtistService.updateArtist(id, {name, description})

  if (update === 0){
    return res.status(404).json({error: "Artista não encontrado"});
  }

    return res.status(200).json({msg: `Artista de ID ${id} atualizado com sucesso!`})

  }catch(err){
    
    console.error("Erro ao atualizar artista:", err);
    res.status(500).json({ error: "Erro ao atualizar artista" });
}
}

export default {
 getArtist,
 postArtist,
 deleteArtist,
 updateArtist
};