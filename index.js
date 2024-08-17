// تعريف الوظيفة التي تقبل وظيفة رد نداء (callback) وتقوم باستدعائها
function receivesAFunction(callback) {
  callback(); // استدعاء وظيفة رد النداء
}

// تعريف الوظيفة التي تُعيد وظيفة مسماة
function returnsANamedFunction() {
  function namedFunction() {
    // يمكن أن تحتوي على منطق هنا إذا لزم الأمر
  }
  return namedFunction; // إعادة الوظيفة المسماة
}

// تعريف الوظيفة التي تُعيد وظيفة غير مسماة
function returnsAnAnonymousFunction() {
  return function() {
    
  };
}
