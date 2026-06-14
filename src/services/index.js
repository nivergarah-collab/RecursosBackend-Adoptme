import Users from "../dao/Users.dao.js";
import Pet from "../dao/Pets.dao.js";
import Adoption from "../dao/Adoption.js";

import UserRepository from "../repository/UserRepository.js";
import PetRepository from "../repository/PetRepository.js";
import AdoptionRepository from "../repository/AdoptionRepository.js";

const defaultServices = {
    usersService: new UserRepository(new Users()),
    petsService: new PetRepository(new Pet()),
    adoptionsService: new AdoptionRepository(new Adoption())
};

export let usersService = defaultServices.usersService;
export let petsService = defaultServices.petsService;
export let adoptionsService = defaultServices.adoptionsService;

export function setServicesForTesting(services = {}) {
    usersService = services.usersService ?? defaultServices.usersService;
    petsService = services.petsService ?? defaultServices.petsService;
    adoptionsService = services.adoptionsService ?? defaultServices.adoptionsService;
}

export function resetServices() {
    usersService = defaultServices.usersService;
    petsService = defaultServices.petsService;
    adoptionsService = defaultServices.adoptionsService;
}
