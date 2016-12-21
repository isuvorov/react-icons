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

var MdBorderOuter = function (_React$Component) {
    _inherits(MdBorderOuter, _React$Component);

    function MdBorderOuter() {
        _classCallCheck(this, MdBorderOuter);

        return _possibleConstructorReturn(this, (MdBorderOuter.__proto__ || Object.getPrototypeOf(MdBorderOuter)).apply(this, arguments));
    }

    _createClass(MdBorderOuter, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm15 18.4v3.2h-3.4v-3.2h3.4z m6.6 6.6v3.4h-3.2v-3.4h3.2z m10 6.6v-23.2h-23.2v23.2h23.2z m-26.6-26.6h30v30h-30v-30z m23.4 13.4v3.2h-3.4v-3.2h3.4z m-6.8 0v3.2h-3.2v-3.2h3.2z m0-6.8v3.4h-3.2v-3.4h3.2z' })
                )
            );
        }
    }]);

    return MdBorderOuter;
}(React.Component);

exports.default = MdBorderOuter;
module.exports = exports['default'];