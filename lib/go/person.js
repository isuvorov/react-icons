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

var GoPerson = function (_React$Component) {
    _inherits(GoPerson, _React$Component);

    function GoPerson() {
        _classCallCheck(this, GoPerson);

        return _possibleConstructorReturn(this, (GoPerson.__proto__ || Object.getPrototypeOf(GoPerson)).apply(this, arguments));
    }

    _createClass(GoPerson, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm27.5 7.5c0-4.1-3.4-7.5-7.5-7.5s-7.5 3.4-7.5 7.5c0 4.1 3.4 7.5 7.5 7.5s7.5-3.4 7.5-7.5z m-7.5 5c-2.8 0-5-2.2-5-5s2.2-5 5-5 5 2.2 5 5-2.2 5-5 5z m5 2.5h-10c-2.8 0-5 2.2-5 5v5c0 2.8 2.2 5 5 5v10h10v-10c2.8 0 5-2.2 5-5v-5c0-2.8-2.2-5-5-5z m2.5 10c0 1.4-1.1 2.5-2.5 2.5v-5h-2.5v15h-5v-15h-2.5v5c-1.4 0-2.5-1.1-2.5-2.5v-5c0-1.4 1.1-2.5 2.5-2.5h10c1.4 0 2.5 1.1 2.5 2.5v5z' })
                )
            );
        }
    }]);

    return GoPerson;
}(React.Component);

exports.default = GoPerson;
module.exports = exports['default'];