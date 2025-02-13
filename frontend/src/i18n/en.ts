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
        pet_form: {
            title: 'Tell us about your {type}',
            labels: {
                name: "Tell us about your {type}'s name?",
                breed: 'What breed are they?',
                choose: 'Choose one',
                unknown: "I don't know",
                mix: "It's a mix",
                gender: 'What gender are they?',
                know_birthdate: 'Do you know their date of birth?',
                birthdate: 'Birthdate',
                approximate_age: 'Approximate Age'
            },
            placeholders: {
                cant_find: "Can't find it?"
            },
            action: 'Continue'
        },
        pet_registered: {
            title: 'Your {type} has been successfully registered!',
            name: 'Name',
            type: 'Type',
            breed: 'Breed',
            gender: 'Gender',
            age: 'Age',
            register_another_one: 'Register another one now!',
            warning: {
                title: 'Be careful!',
                message: '{name} is a {breed}. This breed is considered dangerous!'
            }
        }
    }
};
