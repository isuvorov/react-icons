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

var MdPhoneAndroid = function (_React$Component) {
    _inherits(MdPhoneAndroid, _React$Component);

    function MdPhoneAndroid() {
        _classCallCheck(this, MdPhoneAndroid);

        return _possibleConstructorReturn(this, (MdPhoneAndroid.__proto__ || Object.getPrototypeOf(MdPhoneAndroid)).apply(this, arguments));
    }

    _createClass(MdPhoneAndroid, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm28.8 30v-23.4h-17.5v23.4h17.5z m-5.4 5v-1.6h-6.8v1.6h6.8z m3.2-33.4c2.8 0 5 2.3 5 5v26.8c0 2.7-2.2 5-5 5h-13.2c-2.8 0-5-2.3-5-5v-26.8c0-2.7 2.2-5 5-5h13.2z' })
                )
            );
        }
    }]);

    return MdPhoneAndroid;
}(React.Component);

exports.default = MdPhoneAndroid;
module.exports = exports['default'];