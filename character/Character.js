const fetch = require('node-fetch');
const Spec = require("./Spec");

const baseUrl = 'https://raider.io/api/v1/characters/profile';

class Character {
    #region;
    #realm;
    #name;

    /**
     *
     * @param region the 2 character code for the region of the character
     * @param realm the realm oof the character
     * @param name the characters name, not case-sensitive
     */
    constructor(region, realm, name) {
        this.#region = region;
        this.#realm = realm;
        this.#name = name;
    }

    /**
     * @param fields {String[]}
     * @private
     */
    _loadData(fields) {
        let url = `${baseUrl}?region=${this.#region}&realm=${this.#realm}&name=${this.#name}`;

        if (fields !== null) {
            url += `&fields=${fields.join(',')}`;
        }

        //TODO: Handle saving fields data
        fetch(url)
            .then(response => {
                return response.json()
            }).then(data => {
            this._name = data.name;
            this._race = data['race'];
            this._class = data.class;
            this._spec = new Spec(data.active_spec_name, data.active_spec_role);
            this._gender = data.gender;
            this._faction = data.faction
            this._achievementPoints = data.achievement_points;
            this._honorableKills = data.honorable_kills;
            this._thumbnailUrl = data.thumbnail_url;
            this._realm = data.realm;
            this._lastCrawl = new Date(data.last_crawled_at);
            this._url = data.profile_url;
        })
            .catch(error => {
                console.error(error);
            })
    }

    /**
     * Gets the character name with proper capitalization
     * @returns {String}
     */
    getName() {
        if (this._name == null) {
            this._loadData();
        }
        return this._name;
    }

    /**
     * Gets the character's race
     * @returns {String}
     */
    getRace() {
        if (this._race == null) {
            this._loadData();
        }
        return this._race;
    }

    /**
     * Gets the character's class
     * @returns {String}
     */
    getClass() {
        if (this._class == null) {
            this._loadData();
        }
        return this._class;
    }

    /**
     * Gets the character's spec
     * @returns {Spec}
     */
    getSpec() {
        if (this._spec == null) {
            this._loadData();
        }
        return this._spec;
    }

    /**
     * Gets the character's gender
     * @returns {String}
     */
    getGender() {
        if (this._gender == null) {
            this._loadData();
        }
        return this._gender;
    }

    /**
     * Gets the character's faction
     * @returns {String}
     */
    getFaction() {
        if (this._faction == null) {
            this._loadData();
        }
        return this._faction;
    }

    /**
     * Gets the character's achievement points
     * @returns {Number}
     */
    getAchievementPoints() {
        if (this._achievementPoints == null) {
            this._loadData();
        }
        return this._achievementPoints;
    }

    /**
     * Gets the character's honorable kills
     * @returns {Number}
     */
    getHonorableKills() {
        if (this._honorableKills == null) {
            this._loadData();
        }
        return this._honorableKills;
    }

    /**
     * Gets the character's thumbnail url
     * @returns {String}
     */
    getThumbnailUrl() {
        if (this._thumbnailUrl == null) {
            this._loadData();
        }
        return this._thumbnailUrl;
    }

    /**
     * Gets the character's region
     * @returns {String}
     */
    getRegion() {
        return this.#region;
    }

    /**
     * Gets the character's realm in a human friendly format
     * @returns {String}
     */
    getRealm() {
        if (this._realm == null) {
            this._loadData();
        }
        return this._realm;
    }

    /**
     * Gets the last time raider.io updated this character's information
     * this is NOT the time that data was pulled from the API
     * @returns {Date}
     */
    getLastCrawl() {
        if (this._lastCrawl == null) {
            this._loadData();
        }
        return this._lastCrawl;
    }

    /**
     * Gets the character's profile url
     * @returns {String}
     */
    getUrl() {
        if (this._url == null) {
            this._loadData();
        }
        return this._url;
    }
}

module.exports = Character;