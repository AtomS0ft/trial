(function () {

    function getSearchParameters() {
        var prmstr = window.location.search.substr(1);
        return prmstr != null && prmstr != "" ? transformToAssocArray(prmstr) : {};
    }

    function transformToAssocArray( prmstr ) {
        var params = {};
        var prmarr = prmstr.split("&");
        for ( var i = 0; i < prmarr.length; i++) {
            var tmparr = prmarr[i].split("=");
            params[tmparr[0]] = decodeURIComponent(tmparr[1]);
        }
        return params;
    }

    var params = getSearchParameters();

    Object.keys(params).map(function(key, index) {
        // console.log(params[key]);
        if (key!='FirstName' & key!='LastName'  & key!='EmailAddress'  & key!='HomePhone'  & key!='BillAddress'  & key!='BillCity'  & key!='BillState'  & key!='BillZip'  & key!='BillCountry' & key!='ShippingFirstName' & key!='ShippingLastName') {

            for (i = 0; i < document.forms.length; i++) {
                var hiddenField = document.createElement("input");
                hiddenField.setAttribute("type", "hidden");
                hiddenField.setAttribute("name", key);
                hiddenField.setAttribute("value", params[key]);
                document.forms[i].appendChild(hiddenField) ;
            }
        }

    });


})();