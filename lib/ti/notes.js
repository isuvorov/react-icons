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

var TiNotes = function (_React$Component) {
    _inherits(TiNotes, _React$Component);

    function TiNotes() {
        _classCallCheck(this, TiNotes);

        return _possibleConstructorReturn(this, (TiNotes.__proto__ || Object.getPrototypeOf(TiNotes)).apply(this, arguments));
    }

    _createClass(TiNotes, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm31.4 6.8c-0.2-0.2-0.4-0.3-0.7-0.2l-18.3 2c-0.4 0.1-0.7 0.5-0.7 0.9v17.2c-2.8 0-5 1.8-5 4.1s2.2 4.2 5 4.2 5-1.9 5-4.2v-12.7l10-1v6.2c-2.8 0-5 1.9-5 4.2s2.2 4.2 5 4.2 5-1.9 5-4.2v-20.1c0-0.3-0.1-0.5-0.3-0.6z' })
                )
            );
        }
    }]);

    return TiNotes;
}(React.Component);

exports.default = TiNotes;
module.exports = exports['default'];