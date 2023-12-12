import Layout from "../layout";

const New = () => {
    return (
        <Layout>
        <div className="bg-blue-300 min-w-screen min-h-screen overflow-x-hidden">
          <form onSubmit={formik.handleSubmit} className="max-w-lg mx-auto bg-white rounded shadow-lg mt-7 p-3">
          <h1 className='text-3xl mb-3 text-center'>Register</h1>
            <div className='mb-4'>
              <label for="name">Full Name</label>
              <input type="text" name="name" id="name" 
                className={`block w-full rounded border py-1 px-2 ${formik.touched.name && formik.errors.name ? 'border-red-400' : 'border-gray-300'}`}
                onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.name} />
              {formik.touched.name && formik.errors.name && (
                <span className='text-red-400'>{formik.errors.name}</span>
              )}
            </div>
            <div className='mb-4'>
              <label for="email">Email</label>
              <input type="email" name="email" id="email"
                className={`block w-full rounded border py-1 px-2 ${formik.touched.email && formik.errors.email ? 'border-red-400' : 'border-gray-300'}`}
                onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.email} />
              {formik.touched.email && formik.errors.email && (
                <span className='text-red-400'>{formik.errors.email}</span>
              )}
            </div>
            <div className='mb-4'>
              <label for="profession">Profession</label>
              <select name="profession" id="profession"
                className={`block w-full rounded border py-1 px-2 ${formik.touched.profession && formik.errors.profession ? 'border-red-400' : 'border-gray-300'}`}
                onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.profession} >
                {professions.map((profession, index) => (
                  <option value={profession} key={index}>{profession}</option>
                ))}
              </select>
              {formik.touched.profession && formik.errors.profession && (
                <span className='text-red-400'>{formik.errors.profession}</span>
              )}
            </div>
            <div className='mb-4'>
              <label for="age">Age</label>
              <input type="number" name="age" id="age"
                className={`block w-full rounded border py-1 px-2 ${formik.touched.age && formik.errors.age ? 'border-red-400' : 'border-gray-300'}`}
                onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.age} />
              {formik.touched.age && formik.errors.age && (
                <span className='text-red-400'>{formik.errors.age}</span>
              )}
            </div>
            <div className='text-center'>
              <button className='bg-blue-500 rounded p-3 text-white' type='submit'>Submit</button>
            </div>
          </form>
        </div>
        </Layout>
      );
}
export default New;