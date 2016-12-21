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

var MdLocalRestaurant = function (_React$Component) {
    _inherits(MdLocalRestaurant, _React$Component);

    function MdLocalRestaurant() {
        _classCallCheck(this, MdLocalRestaurant);

        return _possibleConstructorReturn(this, (MdLocalRestaurant.__proto__ || Object.getPrototypeOf(MdLocalRestaurant)).apply(this, arguments));
    }

    _createClass(MdLocalRestaurant, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm24.8 19.2l-2.5 2.4 11.5 11.5-2.3 2.4-11.5-11.5-11.5 11.5-2.3-2.4 16.2-16.2q-0.9-1.9-0.3-4.4t2.7-4.5q2.4-2.4 5.4-2.7t4.7 1.4 1.5 4.8-2.8 5.5q-2 1.9-4.5 2.5t-4.3-0.3z m-11.3 3.1l-7-7.1q-2-1.9-2-4.7t2-4.6l11.7 11.6z' })
                )
            );
        }
    }]);

    return MdLocalRestaurant;
}(React.Component);

exports.default = MdLocalRestaurant;
module.exports = exports['default'];