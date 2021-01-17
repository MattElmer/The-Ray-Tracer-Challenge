const { color, normalize, dot, reflect, sub, add, mul, neg, BLACK, WHITE } = require('./tuple')
const { sphere } = require('./sphere')

exports.point_light = class {
    constructor(pos, int) {
        this.position = pos
        this.intensity = int
    }
}

exports.material = class {
    constructor(col=WHITE, amb=0.1, dif=0.9, spe=0.9, shi=200, ref=0) {
        this.color = col
        this.ambient = amb
        this.diffuse = dif
        this.specular = spe
        this.shininess = shi
        this.reflective = ref
    }
}

exports.lighting = (material, object, light, point, eyev, normalv, in_shadow) => {
  if (object instanceof exports.point_light) return exports.lighting(material, new sphere, object, light, point, eyev, normalv)
//  # combine the surface color with the light's color/intensity
  let effective_color = mul(material.pattern ? material.pattern.pattern_at_shape(object, point) : material.color, light.intensity)
//let effective_color = mul(material.pattern?.stripe_at(point) ?? material.color, light.intensity)
//
//  # find the direction to the light source
  let lightv = normalize(sub(light.position, point)) 
//
//  # compute the ambient contribution
  let ambient = mul(effective_color, material.ambient)
  if (in_shadow) return ambient
//
//  # light_dot_normal represents the cosine of the angle between the
//  # light vector and the normal vector. A negative number means the
//  # light is on the other side of the surface.
  let light_dot_normal = dot(lightv, normalv)
  if (light_dot_normal < 0) {
    var diffuse = BLACK
    var specular = BLACK
  }
  else
  {
//    # compute the diffuse contribution
    var diffuse = mul(effective_color, material.diffuse * light_dot_normal)
//
//    # reflect_dot_eye represents the cosine of the angle between the
//    # reflection vector and the eye vector. A negative number means the
//    # light reflects away from the eye.
    let reflectv = reflect(neg(lightv), normalv)
    let reflect_dot_eye = dot(reflectv, eyev)
//
    if (reflect_dot_eye <= 0) {
      var specular = BLACK
    }
    else
    {
//      # compute the specular contribution
      let factor = Math.pow(reflect_dot_eye, material.shininess)
      var specular = mul(light.intensity, material.specular * factor)
    }
//    end if
  }
//  end if
//
//  # Add the three contributions together to get the final shading
  return [ambient, diffuse, specular].reduce(add)
}
//end function
