'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var MdPermCameraMic = function (_React$Component) {
    _inherits(MdPermCameraMic, _React$Component);

    function MdPermCameraMic() {
        _classCallCheck(this, MdPermCameraMic);

        return _possibleConstructorReturn(this, (MdPermCameraMic.__proto__ || Object.getPrototypeOf(MdPermCameraMic)).apply(this, arguments));
    }

    _createClass(MdPermCameraMic, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm23.4 21.6v-6.6q0-1.3-1.1-2.3t-2.3-1.1-2.3 1.1-1.1 2.3v6.6q0 1.4 1.1 2.4t2.3 1 2.3-1 1.1-2.4z m10-13.2q1.3 0 2.3 0.9t0.9 2.3v20q0 1.4-0.9 2.4t-2.3 1h-11.8v-3.5q3.6-0.6 6-3.4t2.4-6.5h-3.4q0 2.8-1.9 4.8t-4.7 2-4.7-2-1.9-4.8h-3.4q0 3.7 2.4 6.5t6 3.4v3.5h-11.8q-1.3 0-2.3-1t-0.9-2.4v-20q0-1.3 0.9-2.3t2.3-0.9h5.4l3-3.4h10l3 3.4h5.4z' })
                )
            );
        }
    }]);

    return MdPermCameraMic;
}(React.Component);

exports.default = MdPermCameraMic;
module.exports = exports['default'];