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

var MdRestaurantMenu = function (_React$Component) {
    _inherits(MdRestaurantMenu, _React$Component);

    function MdRestaurantMenu() {
        _classCallCheck(this, MdRestaurantMenu);

        return _possibleConstructorReturn(this, (MdRestaurantMenu.__proto__ || Object.getPrototypeOf(MdRestaurantMenu)).apply(this, arguments));
    }

    _createClass(MdRestaurantMenu, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm24.8 19.2l-2.5 2.4 11.5 11.5-2.3 2.4-11.5-11.5-11.5 11.5-2.3-2.4 16.2-16.2c-1.1-2.6-0.3-6.2 2.4-8.9 3.2-3.2 7.7-3.7 10.1-1.3s1.9 7.1-1.3 10.3c-2.7 2.6-6.3 3.4-8.8 2.2z m-11.3 3.1l-7-7.1c-2.6-2.5-2.6-6.8 0-9.3l11.7 11.6z' })
                )
            );
        }
    }]);

    return MdRestaurantMenu;
}(React.Component);

exports.default = MdRestaurantMenu;
module.exports = exports['default'];