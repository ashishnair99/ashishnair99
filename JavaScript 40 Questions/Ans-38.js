// Return the minimum time required for all buses to complete at least totalTrips trips.

var minimumTime = function(time, totalTrips) {
    let low = 1,
        high = 1e14 + 1;

    while (low < high) {
        let mid = Math.floor((low + high) / 2);
        if (isPossible(mid)) high = mid;
        else low = mid + 1;
    }
    return low;

    function isPossible(minTime) {
        // for each bus, Math.floor(minTime / time[i])
        let trips = 0;
        for (let i = 0; i < time.length; i++) {
            trips += Math.floor(minTime / time[i]);
        }
        return trips >= totalTrips;
    }
};

//Driver code.
console.log(minimumTime([1, 2, 3], 5))