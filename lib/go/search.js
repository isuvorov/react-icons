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

var GoSearch = function (_React$Component) {
    _inherits(GoSearch, _React$Component);

    function GoSearch() {
        _classCallCheck(this, GoSearch);

        return _possibleConstructorReturn(this, (GoSearch.__proto__ || Object.getPrototypeOf(GoSearch)).apply(this, arguments));
    }

    _createClass(GoSearch, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm38.5 32.5l-9.7-9.7c1.4-2.3 2.2-4.9 2.2-7.8 0-8.3-6.7-15-15-15-8.3 0-15 6.7-15 15 0 8.3 6.7 15 15 15 2.9 0 5.5-0.8 7.8-2.2l9.7 9.7c0.7 0.7 1.8 0.7 2.5 0l2.5-2.5c0.7-0.7 0.7-1.8 0-2.5z m-22.5-7.5c-5.5 0-10-4.5-10-10s4.5-10 10-10 10 4.5 10 10-4.5 10-10 10z' })
                )
            );
        }
    }]);

    return GoSearch;
}(React.Component);

exports.default = GoSearch;
module.exports = exports['default'];