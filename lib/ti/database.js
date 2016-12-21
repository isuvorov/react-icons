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

var TiDatabase = function (_React$Component) {
    _inherits(TiDatabase, _React$Component);

    function TiDatabase() {
        _classCallCheck(this, TiDatabase);

        return _possibleConstructorReturn(this, (TiDatabase.__proto__ || Object.getPrototypeOf(TiDatabase)).apply(this, arguments));
    }

    _createClass(TiDatabase, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm31.6 14.7c-0.3-6.2-5.4-11.2-11.6-11.2s-11.3 5-11.6 11.2c0 0-0.1 0-0.1 0.1v10.4c0 6.4 5.3 11.7 11.7 11.7s11.7-5.3 11.7-11.7v-10.4c0-0.1-0.1-0.1-0.1-0.2z m-11.6 14.7c-3.7 0-6.9-2.2-8.3-5.4v-0.6c2.1 2.1 5 3.5 8.3 3.5s6.2-1.4 8.3-3.5v0.6c-1.4 3.2-4.6 5.4-8.3 5.4z m0-22.5c4.6 0 8.3 3.7 8.3 8.3s-3.7 8.3-8.3 8.3-8.3-3.7-8.3-8.3 3.7-8.3 8.3-8.3z m0 26.6c-3.8 0-7-2.5-8-6 2 2.2 4.8 3.5 8 3.5s6-1.3 8-3.5c-1 3.5-4.2 6-8 6z' })
                )
            );
        }
    }]);

    return TiDatabase;
}(React.Component);

exports.default = TiDatabase;
module.exports = exports['default'];