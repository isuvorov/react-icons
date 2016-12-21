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

var FaFilm = function (_React$Component) {
    _inherits(FaFilm, _React$Component);

    function FaFilm() {
        _classCallCheck(this, FaFilm);

        return _possibleConstructorReturn(this, (FaFilm.__proto__ || Object.getPrototypeOf(FaFilm)).apply(this, arguments));
    }

    _createClass(FaFilm, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm8 34.6v-2.6q0-0.6-0.4-1t-1-0.4h-2.6q-0.6 0-0.9 0.4t-0.4 1v2.6q0 0.6 0.4 1t0.9 0.3h2.6q0.6 0 1-0.3t0.4-1z m0-8v-2.6q0-0.6-0.4-0.9t-1-0.4h-2.6q-0.6 0-0.9 0.4t-0.4 0.9v2.6q0 0.6 0.4 1t0.9 0.4h2.6q0.6 0 1-0.4t0.4-1z m0-7.9v-2.7q0-0.5-0.4-0.9t-1-0.4h-2.6q-0.6 0-0.9 0.4t-0.4 0.9v2.7q0 0.5 0.4 0.9t0.9 0.4h2.6q0.6 0 1-0.4t0.4-0.9z m21.2 15.9v-10.6q0-0.6-0.4-0.9t-0.9-0.4h-15.9q-0.6 0-1 0.4t-0.4 0.9v10.6q0 0.6 0.4 1t1 0.3h15.9q0.5 0 0.9-0.3t0.4-1z m-21.2-23.9v-2.7q0-0.5-0.4-0.9t-1-0.4h-2.6q-0.6 0-0.9 0.4t-0.4 0.9v2.7q0 0.5 0.4 0.9t0.9 0.4h2.6q0.6 0 1-0.4t0.4-0.9z m29.2 23.9v-2.6q0-0.6-0.4-1t-0.9-0.4h-2.7q-0.5 0-0.9 0.4t-0.4 1v2.6q0 0.6 0.4 1t0.9 0.3h2.7q0.5 0 0.9-0.3t0.4-1z m-8-15.9v-10.7q0-0.5-0.4-0.9t-0.9-0.4h-15.9q-0.6 0-1 0.4t-0.4 0.9v10.7q0 0.5 0.4 0.9t1 0.4h15.9q0.5 0 0.9-0.4t0.4-0.9z m8 7.9v-2.6q0-0.6-0.4-0.9t-0.9-0.4h-2.7q-0.5 0-0.9 0.4t-0.4 0.9v2.6q0 0.6 0.4 1t0.9 0.4h2.7q0.5 0 0.9-0.4t0.4-1z m0-7.9v-2.7q0-0.5-0.4-0.9t-0.9-0.4h-2.7q-0.5 0-0.9 0.4t-0.4 0.9v2.7q0 0.5 0.4 0.9t0.9 0.4h2.7q0.5 0 0.9-0.4t0.4-0.9z m0-8v-2.7q0-0.5-0.4-0.9t-0.9-0.4h-2.7q-0.5 0-0.9 0.4t-0.4 0.9v2.7q0 0.5 0.4 0.9t0.9 0.4h2.7q0.5 0 0.9-0.4t0.4-0.9z m2.7-3.3v27.9q0 1.4-1 2.3t-2.4 1h-33.2q-1.3 0-2.3-1t-1-2.3v-27.9q0-1.4 1-2.4t2.3-0.9h33.2q1.4 0 2.4 0.9t1 2.4z' })
                )
            );
        }
    }]);

    return FaFilm;
}(React.Component);

exports.default = FaFilm;
module.exports = exports['default'];