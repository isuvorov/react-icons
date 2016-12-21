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

var MdPersonPinCircle = function (_React$Component) {
    _inherits(MdPersonPinCircle, _React$Component);

    function MdPersonPinCircle() {
        _classCallCheck(this, MdPersonPinCircle);

        return _possibleConstructorReturn(this, (MdPersonPinCircle.__proto__ || Object.getPrototypeOf(MdPersonPinCircle)).apply(this, arguments));
    }

    _createClass(MdPersonPinCircle, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm20 23.4q4.3 0 6.6-3.6 0-1.5-2.3-2.5t-4.3-1-4.3 1-2.3 2.5q2.3 3.6 6.6 3.6z m0-16.8q-1.3 0-2.3 1.1t-1.1 2.3q0 1.4 1.1 2.4t2.3 1 2.3-1 1.1-2.4q0-1.3-1.1-2.3t-2.3-1.1z m0-3.2q4.8 0 8.2 3.4t3.4 8.2q0 2.4-1.2 5.5t-2.9 5.9-3.4 5.1-2.8 3.8l-1.3 1.3q-0.5-0.5-1.2-1.4t-2.9-3.6-3.5-5.2-2.8-5.8-1.2-5.6q0-4.8 3.4-8.2t8.2-3.4z' })
                )
            );
        }
    }]);

    return MdPersonPinCircle;
}(React.Component);

exports.default = MdPersonPinCircle;
module.exports = exports['default'];