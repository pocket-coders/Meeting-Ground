var Duration;
(function (Duration) {
    Duration[Duration["QUARTER"] = 15] = "QUARTER";
    Duration[Duration["HALF"] = 30] = "HALF";
    Duration[Duration["FULL"] = 50] = "FULL";
})(Duration || (Duration = {}));
var Host = /** @class */ (function () {
    function Host(first, last, email) {
        this.name = { first: first, last: last };
        this.email = email;
        this.links.push({ duration: Duration.QUARTER });
        this.links.push({ duration: Duration.HALF });
        this.links.push({ duration: Duration.FULL });
    }
    Host.prototype.setLinks = function (duration, lnk) {
        switch (duration) {
            case Duration.QUARTER:
                this.links[0] = { duration: Duration.QUARTER, link: lnk };
                break;
            case Duration.HALF:
                this.links[1] = { duration: Duration.HALF, link: lnk };
                break;
            case Duration.FULL:
                this.links[2] = { duration: Duration.HALF, link: lnk };
                break;
            default:
                this.links.push({ duration: duration, link: lnk });
                break;
        }
    };
    Host.prototype.getName = function () {
        return this.name;
    };
    Host.prototype.getEmail = function () {
        return this.email;
    };
    return Host;
}());
