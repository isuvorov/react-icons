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

var TiPointOfInterest = function (_React$Component) {
    _inherits(TiPointOfInterest, _React$Component);

    function TiPointOfInterest() {
        _classCallCheck(this, TiPointOfInterest);

        return _possibleConstructorReturn(this, (TiPointOfInterest.__proto__ || Object.getPrototypeOf(TiPointOfInterest)).apply(this, arguments));
    }

    _createClass(TiPointOfInterest, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm27.5 18.3c3.2 0 5.8-2.6 5.8-5.8s-2.6-5.8-5.8-5.8-5.8 2.6-5.8 5.8v2.5h-3.4v-2.5c0-3.2-2.6-5.8-5.8-5.8s-5.8 2.6-5.8 5.8 2.6 5.8 5.8 5.8h2.5v3.4h-2.5c-3.2 0-5.8 2.6-5.8 5.8s2.6 5.8 5.8 5.8 5.8-2.6 5.8-5.8v-2.5h3.4v2.5c0 3.2 2.6 5.8 5.8 5.8s5.8-2.6 5.8-5.8-2.6-5.8-5.8-5.8h-2.5v-3.4h2.5z m-2.5-5.8c0-1.4 1.1-2.5 2.5-2.5s2.5 1.1 2.5 2.5c0 1.4-1.1 2.5-2.5 2.5h-2.5v-2.5z m-10 15c0 1.4-1.1 2.5-2.5 2.5s-2.5-1.1-2.5-2.5c0-1.4 1.1-2.5 2.5-2.5h2.5v2.5z m0-12.5h-2.5c-1.4 0-2.5-1.1-2.5-2.5 0-1.4 1.1-2.5 2.5-2.5s2.5 1.1 2.5 2.5v2.5z m6.7 6.7h-3.4v-3.4h3.4v3.4z m5.8 3.3c1.4 0 2.5 1.1 2.5 2.5 0 1.4-1.1 2.5-2.5 2.5s-2.5-1.1-2.5-2.5v-2.5h2.5z' })
                )
            );
        }
    }]);

    return TiPointOfInterest;
}(React.Component);

exports.default = TiPointOfInterest;
module.exports = exports['default'];