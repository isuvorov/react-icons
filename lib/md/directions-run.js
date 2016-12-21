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

var MdDirectionsRun = function (_React$Component) {
    _inherits(MdDirectionsRun, _React$Component);

    function MdDirectionsRun() {
        _classCallCheck(this, MdDirectionsRun);

        return _possibleConstructorReturn(this, (MdDirectionsRun.__proto__ || Object.getPrototypeOf(MdDirectionsRun)).apply(this, arguments));
    }

    _createClass(MdDirectionsRun, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm16.5 32.3l-11.7-2.3 0.7-3.4 8.2 1.7 2.6-13.5-3 1.1v5.7h-3.3v-7.8l8.7-3.6c0.4 0 0.8-0.2 1.3-0.2 1.2 0 2.1 0.6 2.8 1.6l1.7 2.7c1.3 2.3 3.9 4 7.1 4v3.3c-3.6 0-6.9-1.6-9.1-4.1l-1 5 3.5 3.3v12.5h-3.4v-10l-3.5-3.3z m6-23.2c-1.8 0-3.4-1.5-3.4-3.3s1.6-3.3 3.4-3.3 3.3 1.5 3.3 3.3-1.5 3.3-3.3 3.3z' })
                )
            );
        }
    }]);

    return MdDirectionsRun;
}(React.Component);

exports.default = MdDirectionsRun;
module.exports = exports['default'];