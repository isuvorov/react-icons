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

var FaMusic = function (_React$Component) {
    _inherits(FaMusic, _React$Component);

    function FaMusic() {
        _classCallCheck(this, FaMusic);

        return _possibleConstructorReturn(this, (FaMusic.__proto__ || Object.getPrototypeOf(FaMusic)).apply(this, arguments));
    }

    _createClass(FaMusic, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm37.3 5v25q0 1.1-0.8 2t-1.9 1.3-2.3 0.8-2.2 0.2-2.1-0.2-2.3-0.8-1.9-1.3-0.8-2 0.8-2 1.9-1.3 2.3-0.8 2.1-0.2q2.4 0 4.3 0.9v-12l-17.1 5.3v15.8q0 1.1-0.8 2t-1.9 1.4-2.3 0.7-2.2 0.2-2.1-0.2-2.3-0.7-1.9-1.4-0.8-2 0.8-2 1.9-1.3 2.3-0.7 2.1-0.3q2.4 0 4.3 0.9v-21.6q0-0.7 0.5-1.2t1-0.8l18.6-5.7q0.3-0.1 0.6-0.1 0.9 0 1.6 0.6t0.6 1.5z' })
                )
            );
        }
    }]);

    return FaMusic;
}(React.Component);

exports.default = FaMusic;
module.exports = exports['default'];