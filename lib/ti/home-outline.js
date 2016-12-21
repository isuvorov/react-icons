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

var TiHomeOutline = function (_React$Component) {
    _inherits(TiHomeOutline, _React$Component);

    function TiHomeOutline() {
        _classCallCheck(this, TiHomeOutline);

        return _possibleConstructorReturn(this, (TiHomeOutline.__proto__ || Object.getPrototypeOf(TiHomeOutline)).apply(this, arguments));
    }

    _createClass(TiHomeOutline, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm37.1 17.4c-5.6-4.7-15.9-13.6-16-13.7l-1.1-0.9-1.1 0.9c-0.1 0.1-10.4 9-16.1 13.8-0.7 0.6-1.1 1.6-1.1 2.5 0 1.8 1.5 3.3 3.3 3.3h1.7v10c0 1.9 1.5 3.4 3.3 3.4h20c1.8 0 3.3-1.5 3.3-3.4v-10h1.7c1.8 0 3.3-1.5 3.3-3.3 0-1-0.4-1.9-1.2-2.5z m-13.8 15.9h-6.6v-8.3h6.6v8.3z m6.7-13.3l0 13.3h-5v-10h-10v10h-5v-13.3h-5c4.6-3.9 12.2-10.4 15-12.8 2.8 2.4 10.4 8.9 15 12.8 0 0-5 0-5 0z' })
                )
            );
        }
    }]);

    return TiHomeOutline;
}(React.Component);

exports.default = TiHomeOutline;
module.exports = exports['default'];