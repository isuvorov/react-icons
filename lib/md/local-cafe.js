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

var MdLocalCafe = function (_React$Component) {
    _inherits(MdLocalCafe, _React$Component);

    function MdLocalCafe() {
        _classCallCheck(this, MdLocalCafe);

        return _possibleConstructorReturn(this, (MdLocalCafe.__proto__ || Object.getPrototypeOf(MdLocalCafe)).apply(this, arguments));
    }

    _createClass(MdLocalCafe, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm3.4 35v-3.4h30v3.4h-30z m30-21.6v-5h-3.4v5h3.4z m0-8.4c1.8 0 3.2 1.5 3.2 3.4v5c0 1.8-1.4 3.2-3.2 3.2h-3.4v5c0 3.7-3 6.8-6.6 6.8h-10c-3.7 0-6.8-3.1-6.8-6.8v-16.6h26.8z' })
                )
            );
        }
    }]);

    return MdLocalCafe;
}(React.Component);

exports.default = MdLocalCafe;
module.exports = exports['default'];