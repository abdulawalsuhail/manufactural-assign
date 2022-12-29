import { useEffect, useState } from "react"

const useAdmin = user => {
    const [admin, setAdmin] = useState(false);
    // console.log(admin)
    const [adminLoading, setAdminLoading] = useState(true);
    const email = user?.email;
    useEffect(() => {
        if (email) {
            fetch(`https://manufact-server-assign-production.up.railway.app/admin/${email}`, {
                method: 'GET',
                headers: {
                    'content-type': 'application/json',
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => res.json())
                .then(data => {
                    // console.log(data)
                    setAdmin(data.admin);
                    setAdminLoading(false);
                })
        }
    }, [user, email])

    return [admin, adminLoading]
}

export default useAdmin;