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

var MdOpenWith = function (_React$Component) {
    _inherits(MdOpenWith, _React$Component);

    function MdOpenWith() {
        _classCallCheck(this, MdOpenWith);

        return _possibleConstructorReturn(this, (MdOpenWith.__proto__ || Object.getPrototypeOf(MdOpenWith)).apply(this, arguments));
    }

    _createClass(MdOpenWith, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm23.4 25v5h5l-8.4 8.4-8.4-8.4h5v-5h6.8z m15-5l-8.4 8.4v-5h-5v-6.8h5v-5z m-23.4-3.4v6.8h-5v5l-8.4-8.4 8.4-8.4v5h5z m1.6-1.6v-5h-5l8.4-8.4 8.4 8.4h-5v5h-6.8z' })
                )
            );
        }
    }]);

    return MdOpenWith;
}(React.Component);

exports.default = MdOpenWith;
module.exports = exports['default'];