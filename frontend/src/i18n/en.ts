export const en = {
    api: {
        exceptions: {
            invalid_request: 'Request is invalid.',
            pet_not_found: 'This pet does not exist.',
            pet_type_not_found: 'This pet type does not exist.',
            pet_breed_not_found: 'This pet breed does not exist.',
            invalid_pet_type: "The pet's type is not valid.",
            invalid_pet_gender: "The pet's gender is not valid.",
            missing_birthdate_data: 'Birth related data is not defined.',
            pet_breed_does_not_belong_to_pet_type:
                'This pet breed does not belong to this pet type.'
        }
    },
    domain: {
        genders: {
            m: 'Male',
            f: 'Female'
        },
        types: {
            cat: 'cat',
            dog: 'dog'
        },
        breeds: {
            afghan_hound: 'Afghan hound',
            akita: 'Akita',
            american_pitbull_terrier: 'American Pitbull Terrier',
            beauceron: 'Beauceron',
            borzoi: 'Borzoi',
            bullmastiff: 'Bullmastiff',
            chihuahua: 'Chihuahua',
            german_shepherd: 'German Shepherd',
            golden_retriever: 'Golder Retriever',
            rottweiler: 'Rottweiler',
            samoyed: 'Samoyed',
            siberian_husky: 'Siberian Husky',
            taiwan_dog: 'Taiwan Dog',
            whippet: 'Whippet',

            american_bobtail: 'American Bobtail',
            bengal: 'Bengal',
            chartreux: 'Chartreux',
            foldex: 'Foldex',
            scottish_fold: 'Scottish Fold',
            russian_blue: 'Russian Blue',
            siamese: 'Siamese',
            siberian: 'Siberian',
            thai: 'Thai'
        },
        age: 'Born this year | {n} year old | {n} years old'
    },
    general: {
        yes: 'Yes',
        no: 'No'
    },
    validation: {
        invalid_form_data: 'Form data is not valid.'
    },
    ui: {
        dog_registered: {
            name: 'Name',
            type: 'Type',
            breed: 'Breed',
            gender: 'Gender',
            age: 'Age',
            warning: 'Be careful! {name} is a {breed}. This breed is considered dangerous!',
            register_another_one: 'Register another one now!'
        }
    }
};
