
const ValidationMiddelware = (req, res, next) => {
    const { character } = req.body;
    const { name, species, gender, origin, image, status } = character;
    

    if (!name || !species || !gender || !origin || !image) {
        if (!name || name.length === 0 || isNumber(name)) {
            return res.status(400).json({ error: 'name have to be a string or not be empty' });
        }
        if (!species || species.length === 0 || isNumber(species)) {
            return res.status(400).json({ error: 'species have to be a string or not be empty' });
        }
        if (!gender || gender.length === 0 || !isNumber(gender), !gender=='Female' || !gender=='Male' || !gender=='Genderless' || !gender=='unknown') {
            return res.status(400).json({ error: 'gender have to be a string or not be female, male, genderless or unknown and not be empty' });
        }
        if (!origin || origin.length === 0 || isNumber(origin)) {
            return res.status(400).json({ error: 'origin have to be a string or not be empty' });
        }
        if (!image || image.length === 0 || isNumber(image)) {
            return res.status(400).json({ error: 'image have to be a string or not be empty' });
        }
        if (!status || status.length === 0 || isNumber(status) || !status=='alive' || !status=='dead' || !status=='unknown') {
            return res.status(400).json({ error: 'status have to be a string or not is alive, dead or unknown or not be empty' });
        
    } else {
        next();
    }
}
}

module.exports = ValidationMiddelware;