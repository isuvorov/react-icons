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

var GoOrganization = function (_React$Component) {
    _inherits(GoOrganization, _React$Component);

    function GoOrganization() {
        _classCallCheck(this, GoOrganization);

        return _possibleConstructorReturn(this, (GoOrganization.__proto__ || Object.getPrototypeOf(GoOrganization)).apply(this, arguments));
    }

    _createClass(GoOrganization, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm32.5 15h-25c-2.8 0-5 2.2-5 5v2.5c0 1.8 1 3.4 2.5 4.3v8.2h10v5h10v-5h10v-8.2c1.5-0.9 2.5-2.5 2.5-4.3v-2.5c0-2.8-2.2-5-5-5z m-20 17.5h-5v-10h-2.5v-2.5c0-1.4 1.1-2.5 2.5-2.5h3.2c-0.4 0.7-0.7 1.6-0.7 2.5v5c0 1.8 1 3.4 2.5 4.3v3.2z m12.5-5v-5h-2.5v15h-5v-15h-2.5v5c-1.4 0-2.5-1.1-2.5-2.5v-5c0-1.4 1.1-2.5 2.5-2.5h10c1.4 0 2.5 1.1 2.5 2.5v5c0 1.4-1.1 2.5-2.5 2.5z m10-5h-2.5v10h-5v-3.2c1.5-0.9 2.5-2.5 2.5-4.3v-5c0-0.9-0.3-1.8-0.7-2.5h3.2c1.4 0 2.5 1.1 2.5 2.5v2.5z m-20.6-10.1c1.3 1.6 3.3 2.6 5.6 2.6 2.3 0 4.3-1 5.6-2.6 0.9 1.5 2.5 2.6 4.4 2.6 2.8 0 5-2.2 5-5s-2.2-5-5-5c-1 0-1.9 0.3-2.7 0.8-0.8-3.3-3.7-5.8-7.3-5.8s-6.5 2.5-7.3 5.8c-0.8-0.5-1.7-0.8-2.7-0.8-2.8 0-5 2.2-5 5s2.2 5 5 5c1.9 0 3.5-1.1 4.4-2.6z m15.6-4.9c1.4 0 2.5 1.1 2.5 2.5s-1.1 2.5-2.5 2.5c-1.4 0-2.5-1.1-2.5-2.5s1.1-2.5 2.5-2.5z m-10-5c2.8 0 5 2.2 5 5s-2.2 5-5 5-5-2.2-5-5 2.2-5 5-5z m-10 10c-1.4 0-2.5-1.1-2.5-2.5s1.1-2.5 2.5-2.5c1.4 0 2.5 1.1 2.5 2.5s-1.1 2.5-2.5 2.5z' })
                )
            );
        }
    }]);

    return GoOrganization;
}(React.Component);

exports.default = GoOrganization;
module.exports = exports['default'];