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

var FaCodiepie = function (_React$Component) {
    _inherits(FaCodiepie, _React$Component);

    function FaCodiepie() {
        _classCallCheck(this, FaCodiepie);

        return _possibleConstructorReturn(this, (FaCodiepie.__proto__ || Object.getPrototypeOf(FaCodiepie)).apply(this, arguments));
    }

    _createClass(FaCodiepie, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm35.6 15.2q1.2 0 1.9 0.6t0.7 1.9-0.8 1.8-2 0.6h-3.1v3.9h-0.5v-8.8h3.8z m3.6 13.1l-0.1 0.3-0.1 0.2q-2.6 5.1-7.4 8.2t-10.6 3q-4.1 0-7.8-1.6t-6.4-4.2-4.2-6.4-1.6-7.8 1.6-7.8 4.2-6.4 6.4-4.2 7.8-1.6q5.4 0 10.1 2.8t7.4 7.5l0.2 0.5q-0.6 0.3-3 1.5t-3.7 1.9q-0.1 0-10.7 6 8.6 4 17.9 8.1z m-18.2 11.2q5.6 0 10.3-3t7.2-7.9l-6.4-2.9q-1.6 3.1-4.6 4.9t-6.5 1.9q-3.4 0-6.2-1.7t-4.6-4.5-1.7-6.3 1.7-6.2 4.6-4.6 6.2-1.7 6.3 1.7 4.5 4.5l6.3-3.2q-2.6-4.6-7.2-7.3t-9.9-2.7q-2.7 0-5.2 0.7t-4.7 1.9-3.9 3.1-3.1 3.9-1.9 4.7-0.7 5.2 0.7 5.2 1.9 4.7 3.1 3.9 3.9 3.1 4.7 1.9 5.2 0.7z' })
                )
            );
        }
    }]);

    return FaCodiepie;
}(React.Component);

exports.default = FaCodiepie;
module.exports = exports['default'];