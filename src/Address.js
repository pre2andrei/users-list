const Address = ({address}) => {
    return ( <address>
        Street: {address.street}<br/>
        Suite: {address.suite}<br/>
        City:{address.city}<br/>
        Zipcode:{address.zipcode}
    </address> );
}
 
export default Address;