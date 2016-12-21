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

var MdRestaurant = function (_React$Component) {
    _inherits(MdRestaurant, _React$Component);

    function MdRestaurant() {
        _classCallCheck(this, MdRestaurant);

        return _possibleConstructorReturn(this, (MdRestaurant.__proto__ || Object.getPrototypeOf(MdRestaurant)).apply(this, arguments));
    }

    _createClass(MdRestaurant, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm26.6 10c0-3 3.8-6.6 8.4-6.6v33.2h-4.1v-13.2h-4.3v-13.4z m-8.2 5v-11.6h3.2v11.6c0 3.5-2.7 6.4-6.2 6.6v15h-4.1v-15c-3.6-0.2-6.3-3.1-6.3-6.6v-11.6h3.4v11.6h3.2v-11.6h3.4v11.6h3.4z' })
                )
            );
        }
    }]);

    return MdRestaurant;
}(React.Component);

exports.default = MdRestaurant;
module.exports = exports['default'];