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

var MdLocalLibrary = function (_React$Component) {
    _inherits(MdLocalLibrary, _React$Component);

    function MdLocalLibrary() {
        _classCallCheck(this, MdLocalLibrary);

        return _possibleConstructorReturn(this, (MdLocalLibrary.__proto__ || Object.getPrototypeOf(MdLocalLibrary)).apply(this, arguments));
    }

    _createClass(MdLocalLibrary, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm20 13.4c-2.7 0-5-2.3-5-5s2.3-5 5-5 5 2.2 5 5-2.3 5-5 5z m0 5.8c3.9-3.7 9.2-5.8 15-5.8v18.2c-5.8 0-11.1 2.3-15 6-3.9-3.7-9.2-6-15-6v-18.2c5.8 0 11.1 2.1 15 5.8z' })
                )
            );
        }
    }]);

    return MdLocalLibrary;
}(React.Component);

exports.default = MdLocalLibrary;
module.exports = exports['default'];