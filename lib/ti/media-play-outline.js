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

var TiMediaPlayOutline = function (_React$Component) {
    _inherits(TiMediaPlayOutline, _React$Component);

    function TiMediaPlayOutline() {
        _classCallCheck(this, TiMediaPlayOutline);

        return _possibleConstructorReturn(this, (TiMediaPlayOutline.__proto__ || Object.getPrototypeOf(TiMediaPlayOutline)).apply(this, arguments));
    }

    _createClass(TiMediaPlayOutline, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm15 11.7c0 0 0.1 0.1 0.1 0.1l8.5 8.2-8.5 8.3-0.1 0 0-16.6z m0-3.4c-1.8 0-3.3 1.5-3.3 3.4v16.6c0 1.9 1.5 3.4 3.3 3.4 0.9 0 1.7-0.4 2.3-1l11-10.7s-6.6-6.4-11-10.7c-0.6-0.6-1.4-1-2.3-1z' })
                )
            );
        }
    }]);

    return TiMediaPlayOutline;
}(React.Component);

exports.default = TiMediaPlayOutline;
module.exports = exports['default'];