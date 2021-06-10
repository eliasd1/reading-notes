# What I Learnt Today

## Location

- There is a Google Play service that allow you to request the last known location of the user’s device.
- Google Play uses APIs, such as The Fused Location Provider, to provide locations to users or developers.

## Set up Google Play services

1. To access the fused location provider, your app's development project must have Google Play services.

2. Download and install the Google Play services component via the SDK Manager and add the library to your project.

3. Create location services client

Example

        @Override protected void onCreate(Bundle savedInstanceState) { 
        fusedLocationClient = LocationServices.getFusedLocationProviderClient(this);  }

4. Get the last known location 

    - When your app is connected to these you can use the fused location provider's "getLastLocation()" method to retrieve the device location.    

            fusedLocationClient.getLastLocation()
                .addOnSuccessListener(this, new OnSuccessListener<Location>() {
                    @Override
                    public void onSuccess(Location location) {
                        // Got last known location. In some rare situations this can be null.
                        if (location != null) {
                            // Logic to handle location object
                        }
                    }
                });
  
5. Maintain a current best estimate 

   - To validate the accuracy of a location that's returned from getLastLocation(), complete steps that include the following:

     - Check whether the location retrieved is significantly newer than the previously fetched location.
     - Check whether the accuracy claimed by the location is better or worse than that of the previous estimate.
     - Check the provider that's associated with the new location. Decide whether you trust this provider more than the one used in your app's cached location.
