export const fr = {
    api: {
        exceptions: {
            invalid_request: "La requête n'est pas valide.",
            pet_not_found: 'Animal de compagnie introuvable.',
            pet_type_not_found: "Type d'animal de compagnie introuvable.",
            pet_breed_not_found: "Race d'animal de compagnie introuvable.",
            invalid_pet_type: "Le type de l'animal de compagnie n'est pas valide.",
            invalid_pet_gender: "Le genre de l'animal de compagnie n'est pas valide.",
            missing_birthdate_data:
                'Les informations relatives à la date de naissance ne sont pas définies.',
            pet_breed_does_not_belong_to_pet_type:
                "La race de l'animal de compagnie n'est pas associé à ce type."
        }
    },
    domain: {
        genders: {
            m: 'Mâle',
            f: 'Femelle'
        },
        types: {
            cat: 'chat',
            dog: 'chien'
        },
        breeds: {
            afghan_hound: 'Lévrier Afghan',
            akita: 'Akita',
            american_pitbull_terrier: 'Pitbull Terrier',
            beauceron: 'Beauceron',
            borzoi: 'Borzoi',
            bullmastiff: 'Bullmastiff',
            chihuahua: 'Chihuahua',
            german_shepherd: 'Berger Allemand',
            golden_retriever: 'Golder Retriever',
            rottweiler: 'Rottweiler',
            samoyed: 'Samoyède',
            siberian_husky: 'Husky Sibérien',
            taiwan_dog: 'Chien de Taiwan',
            whippet: 'Whippet',

            american_bobtail: 'Bobtail Américain',
            bengal: 'Bengal',
            chartreux: 'Chartreux',
            foldex: 'Foldex',
            scottish_fold: 'Scottish Fold',
            russian_blue: 'Bleu Russe',
            siamese: 'Siamois',
            siberian: 'Sibérien',
            thai: 'Thaï'
        },
        age: 'Né(e) cette année | {n} an | {n} ans'
    },
    general: {
        toast: {
            error: 'Erreur!',
            success: 'Succès!'
        },
        yes: 'Oui',
        no: 'Non',
        other_language: 'English',
        back_home: "Retour à l'accueil"
    },
    validation: {
        invalid_form_data: 'Les données du formulaire ne sont pas valides.'
    },
    ui: {
        index: {
            title: 'Enregistrez votre animal de compagnie'
        },
        pet_form: {
            title: 'Dites-nous en plus sur votre {type}',
            labels: {
                name: 'Quel est le nom de votre {type}?',
                breed: 'Quelle est sa race?',
                choose: 'Choisissez',
                unknown: 'Je ne sais pas',
                mix: "C'est une race croisée",
                gender: 'Quel est son genre?',
                know_birthdate: 'Connaissez-vous sa date de naissance?',
                birthdate: 'Date de naissance',
                approximate_age: 'Âge approximative'
            },
            placeholders: {
                cant_find: 'Vous ne trouvez pas?'
            },
            action: 'Continuer'
        },
        pet_registered: {
            title: 'Votre {type} a été enregistré avec succès!',
            name: 'Nom',
            type: 'Type',
            breed: 'Race',
            gender: 'Genre',
            age: 'Age',
            register_another_one: 'Enregistrez-en un autre!',
            warning: {
                title: 'Attention!',
                message: '{name} est un {breed}. Cette race est considérée dangereuse!'
            }
        }
    }
};
