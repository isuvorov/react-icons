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

var IoPlanet = function (_React$Component) {
    _inherits(IoPlanet, _React$Component);

    function IoPlanet() {
        _classCallCheck(this, IoPlanet);

        return _possibleConstructorReturn(this, (IoPlanet.__proto__ || Object.getPrototypeOf(IoPlanet)).apply(this, arguments));
    }

    _createClass(IoPlanet, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm7.5 20.8c3 1.9 6.6 3.7 10.5 5.4 3.4 1.5 6.8 2.7 9.8 3.6-2.1 1.7-4.8 2.7-7.8 2.7-6.6 0-12.1-5.2-12.5-11.7z m0.9-5.4c0-0.3 0.2-0.6 0.4-0.9 0.7-1.6 2-3.1 3.4-4.3 2.1-1.7 4.8-2.7 7.8-2.7 6.6 0 12.1 5.2 12.5 11.7v0.8c0 1.6-0.3 3.2-0.9 4.6 0 0.3-0.2 0.6-0.3 0.9-0.5-0.1-1.1-0.3-1.5-0.4-3.1-0.9-6.4-2.1-9.9-3.5-4.4-1.9-8.4-4.1-11.5-6.2z m25.2 6.9c4.4 2.7 6.8 4.8 6.3 6.4-0.3 0.9-1.5 1.3-3.4 1.3-3.9 0-10.6-1.8-18.1-5-11-4.8-19.2-10.9-18.3-13.7 0.3-0.9 1.5-1.5 3.4-1.3 1.7 0.2 3.7 0.7 5.7 1.4-0.6 0.7-0.6 0.9-1.1 1.7-1.8-0.4-3.4-0.6-4.6-0.6h-0.5c0.2 0.2 0.4 0.5 0.7 0.7 0.8 0.9 2.1 1.9 3.6 2.9 3.2 2.3 7.5 4.6 12.2 6.6 3.4 1.5 6.9 2.8 10 3.6 2.8 0.8 5.3 1.2 7 1.2h0.5c-0.2-0.2-0.4-0.5-0.7-0.7-0.8-0.8-1.8-1.7-3.2-2.7 0.3-0.8 0.4-0.9 0.5-1.8z' })
                )
            );
        }
    }]);

    return IoPlanet;
}(React.Component);

exports.default = IoPlanet;
module.exports = exports['default'];