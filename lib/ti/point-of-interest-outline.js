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

var TiPointOfInterestOutline = function (_React$Component) {
    _inherits(TiPointOfInterestOutline, _React$Component);

    function TiPointOfInterestOutline() {
        _classCallCheck(this, TiPointOfInterestOutline);

        return _possibleConstructorReturn(this, (TiPointOfInterestOutline.__proto__ || Object.getPrototypeOf(TiPointOfInterestOutline)).apply(this, arguments));
    }

    _createClass(TiPointOfInterestOutline, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm27.5 6.7c3.2 0 5.8 2.6 5.8 5.8s-2.6 5.8-5.8 5.8h-2.5v3.4h2.5c3.2 0 5.8 2.6 5.8 5.8s-2.6 5.8-5.8 5.8-5.8-2.6-5.8-5.8v-2.5h-3.4v2.5c0 3.2-2.6 5.8-5.8 5.8s-5.8-2.6-5.8-5.8 2.6-5.8 5.8-5.8h2.5v-3.4h-2.5c-3.2 0-5.8-2.6-5.8-5.8s2.6-5.8 5.8-5.8 5.8 2.6 5.8 5.8v2.5h3.4v-2.5c0-3.2 2.6-5.8 5.8-5.8z m-2.5 8.3h2.5c1.4 0 2.5-1.1 2.5-2.5 0-1.4-1.1-2.5-2.5-2.5s-2.5 1.1-2.5 2.5v2.5z m-12.5 0h2.5v-2.5c0-1.4-1.1-2.5-2.5-2.5s-2.5 1.1-2.5 2.5c0 1.4 1.1 2.5 2.5 2.5z m15 15c1.4 0 2.5-1.1 2.5-2.5 0-1.4-1.1-2.5-2.5-2.5h-2.5v2.5c0 1.4 1.1 2.5 2.5 2.5z m-15 0c1.4 0 2.5-1.1 2.5-2.5v-2.5h-2.5c-1.4 0-2.5 1.1-2.5 2.5 0 1.4 1.1 2.5 2.5 2.5z m15-26.7c-3.1 0-5.8 1.6-7.5 3.9-1.7-2.3-4.4-3.9-7.5-3.9-5.1 0-9.2 4.1-9.2 9.2 0 3.1 1.6 5.8 3.9 7.5-2.3 1.7-3.9 4.4-3.9 7.5 0 5.1 4.1 9.2 9.2 9.2 3.1 0 5.8-1.6 7.5-3.9 1.7 2.3 4.4 3.9 7.5 3.9 5.1 0 9.2-4.1 9.2-9.2 0-3.1-1.6-5.8-3.9-7.5 2.3-1.7 3.9-4.4 3.9-7.5 0-5.1-4.1-9.2-9.2-9.2z m-5.8 15h-3.4v3.4h3.4z' })
                )
            );
        }
    }]);

    return TiPointOfInterestOutline;
}(React.Component);

exports.default = TiPointOfInterestOutline;
module.exports = exports['default'];